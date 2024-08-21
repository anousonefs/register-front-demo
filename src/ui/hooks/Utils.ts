import moment from 'moment';

export const validateRequired = (value: string) => !!value.length;

// regex for pattern email validation
export const patternEmailValidate =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// regex for pattern passwords
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{7,}$/;

// regex for phone number validation
export const phoneRegex =
  /^(?:21|23|31|34|36|38|41|51|54|61|64|71|74|81|84|86|88)[2|5|6|7|9|8|4]\d{5}$|(?:20)[2|5|6|7|9|8|4]\d{7}$|(?:30)[2|5|6|7|9|8|4]\d{6}$/i;

// Formate DateTime
export const formatDatetimeToInformal = (datetime: string) => {
  return moment(datetime).format('DD-MM-YYYY H:mm:ss');
};

// Formate Date
export const formatDate = (date: string | undefined) => {
  return moment(date).format('DD-MM-YYYY');
};

export const formatYearMonthDay = (date: string | undefined) => {
  return moment(date).format('YYYY-MM-DD');
};

export const formatDateToISO = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

export const formatDateToInformal = (date: string) => {
  // 2024-04-23T21:00:00+07:00
  return moment(date, 'YYYY-MM-DDTHH:mm:ss+07:00').format('DD-MM-YYYY');
};

export const parseFileName = (filePath: string) => {
  return filePath.split('/').pop();
};

// Helper function to filter out null values
export const filterParams = (params: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(params)
      .filter(([, v]) => v !== null && v !== undefined && v !== '') // Exclude null and undefined values
      .map(([k, v]) => [k, v])
  );

export const blobToArrayBuffer = (blob: Blob): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read blob as ArrayBuffer.'));
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
};

// Pattern permission actions
export const patternActions = (actions: string[]): string[] => {
  const order: string[] = ['list', 'create', 'update', 'delete'];
  return actions.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};


export const parsefilePathHistory = (filePath?: string | null): string => {
  if (!filePath) {
    return 'N/A';
  }
  // Your existing logic to parse the file path
  return filePath.includes('/') ? filePath.split('/').pop() || 'N/A' : filePath;
};