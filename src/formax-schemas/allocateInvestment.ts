import { Schema } from "../hooks/use-formax";

export const schema: Schema = {
  fields: {
    frequency: {
      label: "Frequency",
    },
    amount: {
      label: "Amount",
    },
    spy: {
      label: "NZX 50",
    },
    nzx50: {
      label: "SPY",
    },
    asx50: {
      label: "ASX 50",
    },
    nzCommercialProperty: {
      label: "NZ Commercial Property",
    },
    globalInfrastructure: {
      label: "Global Infrastructure",
    },
  },
  form: {
    tests: [
      {
        exec: (fieldValues) => {
          const sum =
            fieldValues.spy +
            fieldValues.nzx50 +
            fieldValues.asx50 +
            fieldValues.nzCommercialProperty +
            fieldValues.globalInfrastructure;
          return sum === 100;
        },
        feedback: "Fund weightings must add up to 100%",
      },
    ],
  },
};
