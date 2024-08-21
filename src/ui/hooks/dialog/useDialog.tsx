/* eslint-disable react-refresh/only-export-components */
import { DialogState } from 'src/models/dialog'; // Import DialogState type
import { ReactNode, createContext, useContext, useState } from 'react';

// Define context
export const DialogContext = createContext<DialogState | null>(null);

// Define provider
type DialogProviderProps = {
  children: ReactNode;
};

const DialogProvider = ({ children }: DialogProviderProps) => {
  // State variables to manage dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to track whether the dialog is open
  const [dialogId, setDialogId] = useState<DialogState['dialogId']>(null); // State to track the dialog id

  // Function to open the dialog with a specific id
  const openDialog = (dialogId: DialogState['dialogId']) => {
    setIsDialogOpen(true); // Set isDialogOpen to true
    setDialogId(dialogId); // Set the dialog id
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false); // Set isDialogOpen to false
    setDialogId(null); // Clear the dialog id
  };

  // Value to be provided by the context
  const value: DialogState = {
    isDialogOpen,
    dialogId,
    openDialog,
    closeDialog,
  };

  // Return the provider with the context value and children
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

// Custom hook to access dialog state
const useDialog = () => {
  // Get dialog state from context
  const context = useContext(DialogContext);
  if (!context || context === null) {
    // Throw error if context is not available
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

// Export provider and custom hook
export { DialogProvider, useDialog };
