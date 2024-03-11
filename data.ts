type Entry = {
  name: string;
  ethAddress: string;
};

const generateRandomFirstName = (): string => {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Ivan",
    "Jack",
    "Kathy",
    "Liam",
    "Mia",
    "Nancy",
    "Olivia",
    "Pete",
    "Quinn",
    "Riley",
    "Sam",
    "Tina",
    "Uma",
    "Vince",
    "Wendy",
    "Xander",
    "Yara",
    "Zach",
  ];
  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

const generateRandomEthAddress = (): string => {
  const hexChars = "0123456789abcdef";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return address;
};

const generateData = (entries: number): Entry[] => {
  const data: Entry[] = [];
  for (let i = 0; i < entries; i++) {
    data.push({
      name: generateRandomFirstName(),
      ethAddress: generateRandomEthAddress(),
    });
  }
  return data;
};

export const data = generateData(50);
