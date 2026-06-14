import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions<T> {
  apiFunction: () => Promise<T>;
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: () => Promise<void>;
  reset: () => void;
}

export function useApi<T>({
  apiFunction,
  immediate = true,
  onSuccess,
  onError,
}: UseApiOptions<T>): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [apiFunction, onSuccess, onError]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (immediate) {
      // 使用函数调用而不是直接调用execute
      const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
          const result = await apiFunction();
          setData(result);
          onSuccess?.(result);
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err));
          setError(error);
          onError?.(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }
  }, [apiFunction, immediate, onSuccess, onError]);

  return { data, loading, error, execute, reset };
}

// 用于轮询的钩子
export function usePolling<T>(
  apiFunction: () => Promise<T>,
  intervalMs: number = 30000
): UseApiReturn<T> {
  const apiResult = useApi({ apiFunction, immediate: false });

  useEffect(() => {
    // 首次执行
    apiResult.execute();

    // 设置轮询
    const interval = setInterval(() => {
      apiResult.execute();
    }, intervalMs);

    return () => clearInterval(interval);
  }, [apiResult, intervalMs]);

  return apiResult;
}

// 用于分页的钩子
export function usePagination<T>(
  items: T[],
  itemsPerPage: number = 10
) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  return {
    paginatedItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
}

// 用于搜索的钩子
export function useSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  searchTerm: string
) {
  const filteredItems = items.filter(item =>
    searchFields.some(field => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  return filteredItems;
}