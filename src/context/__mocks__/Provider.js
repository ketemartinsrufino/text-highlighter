import { COLORS } from '../../components/ColorItem/Colors';

export const MockContext = ({
  Consumer(props) {
    return props.children(context)
  } 
})

export const context = {
  originalText: '',
  isEditionMode: false,
  colorToHighlight: COLORS.red,
  filterColors: [],
  highlightedTexts: [],

  updateContext: jest.fn(),
  toogleEditionMode: jest.fn(),
  addHighlightedText: jest.fn(),
  clearHighlightedTexts: jest.fn()
};