import { NavItemType } from "types";

export interface ClientStateProps {
  parameter: Parameter[] | [];
  parameterGroup: ParameterGroup[] | [];
  menu: ClientMenu[] | [];
  menuItems: NavItemType[] | [];
  holiday: Holiday[] | [];
  error: object | string | null;
  loading: boolean;
  menuLoading: boolean;
}

export type ClientMenu = {
  id?: string;
  name?: string;
  screenCode?: string;
  screenId?: string;
  parentId?: string;
  order?: string;
  screenAppUrl?: string;
  icon?: string;
};

type Parameter = {
  id?: string;
  code?: string;
  parameterGroupId?: string;
  order?: any;
  value?: string;
  attributes?: string;
};

type ParameterGroup = {
  id?: string;
  code?: string;
  description?: string;
  moduleId?: string;
  schemaType?: string;
  owner?: string;
};

type Holiday = {
  id?: string;
  countryId?: string;
  countryTypeId?: string;
  dayMonth?: string;
  day?: string;
  isFull?: boolean;
  description?: string;
};
