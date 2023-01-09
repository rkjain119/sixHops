const data = {
  Ayushi: {
    name: 'Ayushi',
    relatedTo: ['Sameer', 'Bhaskar'],
  },
  Bhaskar: {
    name: 'Bhaskar',
    relatedTo: ['Ayushi', 'Shantikumar'],
  },
  Kamalnath: {
    name: 'Kamalnath',
    relatedTo: ['Sameer', 'Shantikumar'],
  },
  Sameer: {
    name: 'Sameer',
    relatedTo: ['Ayushi', 'Kamalnath'],
  },
  Shantikumar: {
    name: 'Shantikumar',
    relatedTo: ['Kamalnath', 'Bhaskar'],
  },
}

export default data
