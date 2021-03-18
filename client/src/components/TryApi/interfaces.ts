export class PropertyAttributes {
  Detached = true;
  Semi = true;
  Terraced = true;
  Flat = true;
  low = 50000;
  high = 500000;
  minbeds = 1;
  maxbeds = 4;
  radius = 2;
  location = "islington";
}

interface Dwelling {
  name: string,
  price: string,
  type: string,
  link: string,
}

interface DwellingsSearchRes {
  noOfDwellings: number;
  dwellings: Array<Dwelling>;
}

export interface ResultsProps {
  propertyData: DwellingsSearchRes | undefined
}

export interface FormComponentProps {
  propertyAttributes: PropertyAttributes;
  handleFormUpdates: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}