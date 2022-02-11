const pets = [
  {id: 1, name: 'aaa'},
  {id: 2, name: 'bbb'},
]

export const petService = {
  getPets() {
    return pets
  },
  getPet(id: number) {
    return pets.find(pet => pet.id === id)
  }
}
