export const checkPhone = (phone: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(phone.startsWith('+7'));
    }, 500);
  });
};