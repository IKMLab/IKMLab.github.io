export const researchData = [
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      '123 456 789',
    authors: [
      '123 456 789',
      '456 789 123',
      '789 123 456',
    ],
    venue: 'ACL',
    year: 2019,
    // code: 'https://github.com/IKMLab/arct2',
    // url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
  {
    title:
      'Probing Neural Network Comprehension of Natural Language Arguments',
    authors: [
      'Timothy Niven',
      'Hung Yu Kao',
    ],
    venue: 'ACL',
    year: 2019,
    code: 'https://github.com/IKMLab/arct2',
    url: 'https://www.aclweb.org/anthology/P19-1459',
    topic: 'NLP',
    subfields: [
      'NLU',
      'Argument Comprehension',
      'Probing',
    ],
  },
]

export default researchData

const schemaCheck = () => {
  // We use the json-schema.org spec.
  // See https://json-schema.org/specification.html
  const schema = {
    description: 'An array of research data.',
    type: 'array',
    items: {
      description: 'Research work.',
      type: 'object',
      required: [
        'title',
        'authors',
        'venue',
        'year',
        'topic',
      ],
      properties: {
        title: {
          description: 'Title of the research.',
          type: 'string',
        },
        authors: {
          description: 'Authors of the research.',
          type: 'array',
          items: {
            description: 'Author of the research.',
            type: 'string',
          },
        },
        venue: {
          description: 'Publication venue of the research',
          type: 'string',
        },
        year: {
          description: 'Year of publication',
          type: 'number',
        },
        code: {
          description: 'Url of source code',
          type: 'string',
        },
        url: {
          description: 'Url of publication (on publication venue)',
          type: 'string',
        },
        topic: {
          description: 'Research topic',
          type: 'string',
        },
        subfields: {
          description: 'Subfields under the research topic',
          type: 'array',
          items: {
            description: 'Subfield under the research topic',
            type: 'string',
          },
        },
      },
    },
  }

  const validator = (input, type) => {
    if (type === 'array') {
      return Array.isArray(input)
    }
    return (typeof input) === type
  }

  // Check each field with above schema. `researchData` must be an array,
  // so this one will be written explicitly.
  if (!validator(researchData, 'array')) {
    throw new Error(`researchData is not type array.`)
  }

  researchData.forEach((research) => {
    // Items in `researchData` must be an object, so this one will
    // also be written explicitly.
    if (!validator(research, 'object')) {
      throw new Error(`researchData is not type object.`)
    }

    // Check if title is filled.
    if (!validator(research.title, schema.items.properties.title.type)) {
      throw new Error(
          `researchData.title is not type ${
            schema.items.properties.title.type
          }.`,
      )
    }

    // Check if authors names are filled.
    // `researchData.authors` must be an array,
    // so this one will be written explicitly.
    if (!validator(research.authors, 'array')) {
      throw new Error(
          `researchData.authors is not type array.`,
      )
    }
    research.authors.forEach((author)=>{
      if (!validator(author, schema.items.properties.authors.items.type)) {
        throw new Error(
            `researchData.authors is not type array of ${
              schema.items.properties.authors.items.type
            }.`,
        )
      }
    })

    // Check if publication venue is filled.
    if (!validator(research.venue, schema.items.properties.venue.type)) {
      throw new Error(
          `researchData.venue is not type ${research.venue}.`,
      )
    }

    // Check if publication year is filled with correct range.
    if (research.year) {
      if (!validator(research.year, schema.items.properties.year.type) ||
      research.year < 1990 ||
      research.year > new Date(Date.now()).getFullYear()) {
        throw new Error(
            `researchData.year must be in range [1990, ${
              new Date(Date.now()).getFullYear()
            }].`,
        )
      }
    }

    // Check if publication source code is filled.
    if (research.code) {
      if (!validator(research.code, schema.items.properties.code.type)) {
        throw new Error(
            `researchData.code is not type ${research.code}.`,
        )
      }
    }
    // Check if publication url is filled.
    if (research.url) {
      if (!validator(research.url, schema.items.properties.url.type)) {
        throw new Error(
            `researchData.url is not type ${research.url}.`,
        )
      }
    }
    // Check if research topic is filled.
    if (!validator(research.topic, schema.items.properties.topic.type)) {
      throw new Error(
          `researchData.topic is not type ${research.topic}.`,
      )
    }
    // Check if research subfields is filled.
    // `researchData.subfields` must be an array,
    // so this one will be written explicitly.
    if (research.subfields) {
      if (!validator(research.subfields, 'array')) {
        throw new Error(
            `researchData.subfields is not type array.`,
        )
      }
      research.subfields.forEach((subfield)=>{
        if (!validator(subfield,
            schema.items.properties.subfields.items.type)) {
          throw new Error(
              `researchData.subfields is not type array of ${
                schema.items.properties.subfields.items.type
              }.`,
          )
        }
      })
    }
  })
}

schemaCheck()
