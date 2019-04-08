export const removeEmpty = obj =>
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === 'object') {
      removeEmpty(val);
    } else if (val == null) {
      delete obj[key];
    }
  });

export const isForeignKeyException = e => e.code === '23503' || e.code === '23505';
