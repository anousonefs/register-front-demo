import { InfiniteData } from '@tanstack/react-query';
import { Queries } from 'models/filter';

export interface InfiniteDataCustom<T, U = unknown> {
  allData?: T[];
  pages: InfiniteData<T, U>['pages'];
  pageParams: InfiniteData<T, U>['pageParams'];
}

export interface TableProps {
  searchValue: Queries['search'];
}

export interface TableStyle {
  enableTopToolbar: boolean;
  enablePagination: boolean;
  enableRowNumbers: boolean;
  enableEditing: boolean;
  enableStickyHeader: boolean;
  enableFullScreenToggle: boolean;
  enableDensityToggle: boolean;
  enableHiding: boolean;
  enableFilters: boolean;
  enableSorting: boolean;
  enableColumnFilters: boolean;
  manualPagination: boolean;
  enableColumnActions: boolean;
  createDisplayMode: 'row' | 'custom' | 'modal' | undefined; // Adjusted type
  editDisplayMode: 'row' | 'custom' | 'modal' | 'table' | 'cell' | undefined; // Adjusted type
  // memoMode: string;
  // rowNumberDisplayMode: string;
  // getRowId: (row: { id: string; }) => string;
  mrtTheme: () => {
    baseBackgroundColor: string;
  };
  muiTablePaperProps: {
    sx: {
      padding: number;
      px: number;
      backgroundColor: string;
      boxShadow: string;
      height: string;
    };
  };
  muiTableProps: {
    sx: {
      width: string;
      height: string;
      overflow?: string;
      overflowY?: string;
    };
  };
  muiTableContainerProps: {
    sx: {
      width: string;
      height: string;
      maxHeight: string;
      overflowY?: string;
      overflowX?: string;
    };
  };
  muiTableHeaderProps: {
    sx: {
      top: number;
      position: string;
      zIndex: number;
    };
  };
  muiTableHeadCellProps: object;
  muiTableBodyCellProps: {
    sx: {
      width: string;
      textAlign: string;
      justifyContent: string;
      overflow?: string;
      whiteSpace?: string;
      textOverflow: string;
    };
  };
  muiTableButtonProps: {
    sx: {
      overflow: string;
    };
  };
  muiTableFooterProps: {
    sx: {
      position: string;
      bottom: number;
      backgroundColor: string;
      zIndex: number;
    };
  };
  muiTableBottomToolbarProps: {
    sx: {
      position: string;
      bottom: number;
      zIndex: number;
    };
  };
}

export type PaginationType = {
  pageIndex: number;
  pageSize: number;
};

export interface Pagination {
  pageSize: number;
  nextPageToken?: string;
  pageIndex: number;
}

export type PaginationProps = {
  pagination: PaginationType;
  totalItems: number;
  isFetchingNextPage: boolean;
  nextPageTokenIndexEmpty: number | undefined;
  nextPageToken: string | undefined;
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>;
  fetchNextPage: () => Promise<void>;
};
