export const handleSliceName = (name: string) => {
  const firstName = name.split(" ")[0];
  const secondName = name.split(" ")[1];

  return `${firstName} ${secondName}`;
};
