export function mapObjectToObject(
  obj: { [key: string]: any },
  mapper: (objectKey: string, objectValue?: any) => any
) {
  const returnObj: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    returnObj[key] = mapper(key, obj[key]);
  });
  return returnObj;
}
