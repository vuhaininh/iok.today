mutation PatchPassword {
  patchUser(id: "VXNlck5vZGU6MTM=", input: {password: "gameover"}) {
    user {
      email
      id
      password
    }
  }
}

query AllUsers {
  allUsers {
    edges {
      node {
        id
        email
        profile {
          edges {
            node {
              id
              mobile
              dob
            }
          }
        }
      }
    }
  }
}

query AllStaffProfiles {
  staffProfiles {
    edges {
      node {
        id
        firstName
        lastName
        position
        dob
        mobile
        address
        liability
        liabilityLimit
        user {
          id
          email
        }
      }
    }
  }
}

query GetProfile {
  staffProfile(id: "U3RhZmZQcm9maWxlTm9kZTox") {
    id
    firstName
    lastName
    position
    dob
    mobile
    address
    liability
    liabilityLimit
    user {
      id
      email
    }
  }
}

query AllCategories {
  categories {
    edges {
      node {
        id
        code
        name
      }
    }
  }
}

query AllProducts {
  products {
    edges {
      node {
        id
        code
        name
      }
    }
  }
}

query GetIndividualCustomers {
  individualCustomerProfiles {
    edges {
      node {
        id
        firstName
        lastName
        mobile
        address
        position
        dob
        email
        own {
          code
          customerGroup {
            code
            name
          }
        }
      }
    }
  }
}

query GetSingleCustomer {
  individualCustomerProfile(id: "SW5kaXZpZHVhbEN1c3RvbWVyUHJvZmlsZU5vZGU6Mg==") {
    id
    firstName
    lastName
    mobile
    address
    position
    dob
    email
    liability
    liabilityLimit
    own {
      code
      customerGroup {
        code
        name
      }
    }
  }
}

query GetCompanyCustomers {
  companyCustomerProfiles {
    edges {
      node {
        id
        own {
          code
        }
        name
        address
        taxCode
        liability
        liabilityLimit
        representatives {
          edges {
            node {
              id
              firstName
              lastName
              position
            }
          }
        }
      }
    }
  }
}

query GetSingleCompany {
  companyCustomerProfile(id: "Q29tcGFueUN1c3RvbWVyUHJvZmlsZU5vZGU6MQ==") {
   	id
    own {
      code
    }
    name
    address
    taxCode
    liability
    liabilityLimit
    representatives {
      edges {
        node {
          id
          firstName
          lastName
          position
        }
      }
    }
  }
}
