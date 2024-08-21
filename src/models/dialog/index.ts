/**
 * Represents the ID of a dialog.
 * It can be either null or a specific dialog ID.
 */
export type dialogId = null | 'create' | 'update' | 'delete';

/**
 * Represents the state of a dialog.
 */
export type DialogState = {
  /**
   * Indicates whether the dialog is open or not.
   */
  isDialogOpen: boolean;

  /**
   * The ID of the dialog.
   */
  dialogId: dialogId;

  /**
   * Opens a dialog with the specified ID.
   * @param dialogId - The ID of the dialog to open.
   */
  openDialog: (dialogId: dialogId) => void;

  /**
   * Closes the currently open dialog.
   */
  closeDialog: () => void;
};

/**
 * Represents the queries for the dialog.
 */

export type ConfirmDialogProps = {
  title: string;
  description?: string;
  onSubmitConfirm: (row: unknown) => void;
  onCancelConfirm: () => void;
};
