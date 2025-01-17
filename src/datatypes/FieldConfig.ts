type FieldConfig = {
        "game": string,
        "field-image": string,
        "field-image-size": Array<number>,
        "field-corners": {
          "top-left": Array<number>,
          "bottom-right": Array<number>
        },
        "field-size": Array<number>,
        "field-unit": string
      }
export default FieldConfig;