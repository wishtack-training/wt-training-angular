export function removeUndefinedFields(object: object) {
  return Object.entries(object)
    .reduce((acc, [key, value]) => {

      if (value === undefined) {
        return acc;
      }

      return {
        ...acc,
        [key]: value
      };
    }, {});
}
