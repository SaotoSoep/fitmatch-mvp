window.FitMatchData = {
  productTypes: {
    tshirt: {
      label: "Women's T-shirt",
      description: "A compact starting category for comparing cut, width, and length across brands."
    }
  },
  brands: {
    zara: {
      label: "Zara",
      fitProfile: "slim",
      productType: "tshirt",
      source: "sample brand chart",
      notes: "Runs slimmer and slightly shorter than the baseline.",
      sizes: {
        XS: { chest: 82, shoulders: 36, length: 55 },
        S: { chest: 86, shoulders: 37, length: 57 },
        M: { chest: 90, shoulders: 38, length: 59 },
        L: { chest: 96, shoulders: 40, length: 61 }
      }
    },
    mango: {
      label: "Mango",
      fitProfile: "regular",
      productType: "tshirt",
      source: "sample brand chart",
      notes: "Runs roomier and a touch longer than the baseline.",
      sizes: {
        XS: { chest: 86, shoulders: 37, length: 57 },
        S: { chest: 90, shoulders: 39, length: 59 },
        M: { chest: 94, shoulders: 40, length: 61 },
        L: { chest: 100, shoulders: 42, length: 63 }
      }
    },
    cos: {
      label: "COS",
      fitProfile: "boxy",
      productType: "tshirt",
      source: "sample brand chart",
      notes: "Boxier silhouette with broader shoulders and more length.",
      sizes: {
        XS: { chest: 88, shoulders: 39, length: 59 },
        S: { chest: 92, shoulders: 40, length: 61 },
        M: { chest: 98, shoulders: 42, length: 63 },
        L: { chest: 104, shoulders: 44, length: 65 }
      }
    }
  }
};
