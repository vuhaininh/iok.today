mutation PatchPassword {
    patchUser(id: "VXNlck5vZGU6Mjk=", input: {password: "gameover"}) {
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
                createdAt
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
                    id
                    code
                    bankAccount {
                        edges {
                            node {
                                accountNumber
                                bankName
                                branch
                                owner
                            }
                        }
                    }
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

query GetCustomerBankAccount {
    customerBankAccounts {
        edges {
            node {
                owner
            }
        }
    }
}

query GetCustomers {
    customers {
        edges {
            node {
                code
                id
            }
        }
    }
}

mutation CreateCustomerBankAccount {
    createCustomerBankAccount(input: {own: "Q3VzdG9tZXJOb2RlOjM=", accountNumber: "222312342423423", branch: "VIB Bai Chay", bankName: "VIB", owner: "Cong ty Aura"}) {
        customerBankAccount {
            id
            owner
        }
    }
}

mutation CreateStaffProfile {
    createStaffProfile(input: {firstName: "Test", lastName: "Game", mobile: "0983939333", address: "Bãi Cháy", position: "Nhân viên KD", dob: "2020-02-25", user: "VXNlck5vZGU6MTY=", liability: 12000000, liabilityLimit: 15000000}) {
        staffProfile {
            id
        }
    }
}

mutation DeleteUser {
    deleteUser(id: "") {
        found
        deletedId
    }
}

mutation PatchStaffProfile {
    patchStaffProfile(id: "U3RhZmZQcm9maWxlTm9kZTox", input: {firstName: "Mike"}) {
        staffProfile {
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
