import { TableStyle } from 'models/table';
import themeSetting from 'src/ui/styles/theme/themeConfig';

export const tableStyle: TableStyle = {
  enableTopToolbar: true,
  enableStickyHeader: true,
  enableSorting: false,
  enableRowNumbers: false,
  enableFullScreenToggle: false,
  enableHiding: false,
  enableDensityToggle: false,
  enableEditing: false,
  enableFilters: false,
  enableColumnFilters: false,
  enableColumnActions: false,
  createDisplayMode: 'modal',
  editDisplayMode: 'modal',
  enablePagination: true,
  manualPagination: false,
  mrtTheme: () => ({
    baseBackgroundColor: themeSetting.content.whiteColor,
  }),
  muiTablePaperProps: {
    sx: {
      padding: 1,
      px: 2,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      height: '100%',
    },
  },
  muiTableProps: {
    sx: {
      width: '100%',
      overflow: 'auto',
      height: '100%',
    },
  },
  muiTableContainerProps: {
    sx: {
      width: '100%',
      height: '100%',
      maxHeight: 'calc(75vh - 200px)',
      overflowY: 'auto',
      overflowX: 'auto',
    },
  },
  muiTableHeaderProps: {
    sx: {
      top: 0,
      position: 'sticky',
      zIndex: 1,
    },
  },
  muiTableHeadCellProps: {
    sx: () => ({
      color: themeSetting.content.textColor,
      width: 'max-content',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',
    }),
  },
  muiTableBodyCellProps: {
    sx: {
      width: 'max-content',
      textAlign: 'left',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  muiTableButtonProps: {
    sx: {
      overflow: 'auto',
    },
  },
  muiTableFooterProps: {
    sx: {
      position: 'sticky',
      bottom: 0,
      backgroundColor: '#FFF',
      zIndex: 1,
    },
  },
  muiTableBottomToolbarProps: {
    sx: {
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
    },
  },
};
