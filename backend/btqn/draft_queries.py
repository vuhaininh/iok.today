mutation PatchPassword{
    patchUser(id: "VXNlck5vZGU6MTM=", input: {password: "gameover"}){
        user{
            email
            id
            password
        }
    }
}
query AllUsers{
    allUsers{
        edges{
            node{
                id
                email
                profile{
                    edges{
                        node{
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
query AllStaffProfiles{
    staffProfiles{
        edges{
            node{
                user{
                    email
                }
                id
                firstName
                lastName
                position
                mobile
                address
                liability
                liabilityLimit
            }
        }
    }
}

query AllCategories{
    categories{
        edges{
            node{
                id
                code
                name
            }
        }
    }
}

query AllProducts{
    products{
        edges{
            node{
                id
                code
                name
            }
        }
    }
}
