// project imports
import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import {
  Employee,
  PersonalInformation,
  ContactInformation,
  BusinessInformation,
} from "types/employee";

const initialState: DefaultRootStateProps["employee"] = {
  employeeCardList: [],
  employee: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  error: null,
  loading: false,
  loadingData: false,
  employeeDetail: null,
  personal: null,
  personalManager: null,
  updatedPersonal: null,
  contact: null,
  updatedContact: null,
  business: null,
  businessManager: null,
  updatedBusiness: null,
  addedEmployee: null,
  deletedEmployee: null,
  updatedEmployee: null,
};

const slice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getEmployeeSuccess(state, action) {
      state.employee = action.payload;
    },
    getEmployeeByUserIdSuccess(state, action) {
      state.employeeDetail = action.payload;
    },
    // ADD Employee
    postEmployeeSuccess(state, action) {
      state.addedEmployee = action.payload;
    },
    // delete Employee
    deleteEmployeeSuccess(state, action) {
      state.deletedEmployee = action.payload;
    },
    //edit Employee
    putEmployeeSuccess(state, action) {
      state.updatedEmployee = action.payload;
    },

    getPersonalInformationSuccess(state, action) {
      state.personal = action.payload;
    },

    getManagerPersonalInformationSuccess(state, action) {
      state.personalManager = action.payload;
    },

    putPersonalInformationSuccess(state, action) {
      state.updatedPersonal = action.payload;
    },

    getContactInformationSuccess(state, action) {
      state.contact = action.payload;
    },

    putContactInformationSuccess(state, action) {
      state.updatedContact = action.payload;
    },

    getBusinessInformationSuccess(state, action) {
      state.business = action.payload;
    },

    getManagerBusinessInformationSuccess(state, action) {
      state.businessManager = action.payload;
    },

    putBusinessInformationSuccess(state, action) {
      state.updatedBusiness = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanEmployeeState() {
      return initialState;
    },

    cleanPersonalState(state) {
      return {
        ...state,
        updatedPersonal: null,
      };
    },

    cleanContactState(state) {
      return {
        ...state,
        updatedContact: null,
      };
    },

    cleanBusinessState(state) {
      return {
        ...state,
        updatedBusiness: null,
      };
    },

    cleanWorkExperienceState(state) {
      return {
        ...state,
        addedWorkExperience: null,
        updatedWorkExperience: null,
        deletedWorkExperience: null,
      };
    },

    cleanNoteState(state) {
      return {
        ...state,
        addedNote: null,
        updatedNote: null,
        deletedNote: null,
      };
    },
  },
});

export default slice.reducer;

export function getEmployeeList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/employees" + queryString);
      dispatch(slice.actions.getEmployeeSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getEmployeeByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get("/api/employees/" + userId);
      dispatch(slice.actions.getEmployeeByUserIdSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function postEmployee(employee: Employee) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/employees", employee);
      dispatch(slice.actions.postEmployeeSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteEmployee(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/employees/${userId}`);
      dispatch(slice.actions.deleteEmployeeSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putEmployee(employee: Employee) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/employees", employee);
      dispatch(slice.actions.putEmployeeSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function getPersonalInformationByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get("/api/employees/personal/" + userId);
      dispatch(slice.actions.getPersonalInformationSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getManagerPersonalInformationByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get(
        "/api/employees/manager/personal/" + userId
      );
      dispatch(
        slice.actions.getManagerPersonalInformationSuccess(response.data)
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function putPersonalInformation(personal: PersonalInformation) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(false));
      const response = await axios.put("/api/employees/personal", personal);
      dispatch(slice.actions.putPersonalInformationSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function getContactInformationByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get("/api/employees/contact/" + userId);
      dispatch(slice.actions.getContactInformationSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function putContactInformation(contact: ContactInformation) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/employees/contact", contact);
      dispatch(slice.actions.putContactInformationSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function getBusinessInformationByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get("/api/employees/business/" + userId);
      dispatch(slice.actions.getBusinessInformationSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getManagerBusinessInformationByUserId(userId: string) {
  return async () => {
    try {
      const response = await axios.get(
        "/api/employees/manager/business/" + userId
      );
      dispatch(
        slice.actions.getManagerBusinessInformationSuccess(response.data)
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function putBusinessInformation(business: BusinessInformation) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/employees/business", business);
      dispatch(slice.actions.setLoading(false));
      dispatch(slice.actions.putBusinessInformationSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanEmployeeState() {
  return async () => {
    dispatch(slice.actions.cleanEmployeeState());
  };
}

export function cleanPersonalState() {
  return async () => {
    dispatch(slice.actions.cleanPersonalState());
  };
}

export function cleanContactState() {
  return async () => {
    dispatch(slice.actions.cleanContactState());
  };
}

export function cleanBusinessState() {
  return async () => {
    dispatch(slice.actions.cleanBusinessState());
  };
}

export function cleanWorkExperienceState() {
  return async () => {
    dispatch(slice.actions.cleanWorkExperienceState());
  };
}
