import {
  StyleSheet,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  isFlex1: {
    flex: 1
  },
  isFlexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  isAdamFontRegular: {
    fontFamily: 'adam',
    fontWeight: 'normal'
  },
  isGinoraFontRegular: {
    fontFamily: 'ginora-regular',
    fontWeight: 'normal'
  },
  isGinoraFontBold: {
    fontFamily: 'ginora-regular',
    fontWeight: 'bold'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCentered: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    padding: 20
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 20
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  background: {
    width: width,
    height: height
  },
  isBackgroundWhite: {
    backgroundColor: '#fff'
  },
  hasShadow1: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1
  },
  sectionRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
  },
  sectionColumn: {
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  imagePeople: {
    width: width - 80,
    height: 230
  },
  fontBlue16: {
    color: '#2771A2',
    fontSize: 16
  },
  fontBlack16: {
    color: 'black',
    fontSize: 16
  },
  fontBlue20: {
    color: '#4572A0',
    fontWeight: 'bold',
    fontSize: 20
  },
  isLineHeight20: {
    lineHeight: 20
  },
  isBold: {
    fontWeight: 'bold'
  },
  fontWhite20: {
    color: '#FFFFFF',
    fontSize: 24
  },
  fontWhite18: {
    color: '#FFFFFF',
    fontSize: 18
  },
  fontWhite16: {
    color: '#FFFFFF',
    fontSize: 16
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14
  },
  fontBlack14Bold: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold'
  },
  fontBlack16Bold: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fontBlack18: {
    color: '#000000',
    fontSize: 18
  },
  fontBlack18Bold: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  fontBlack20Bold: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  fontGray12: {
    color: '#7A828E',
    fontSize: 12
  },
  fontGray16: {
    color: '#7A828E',
    fontSize: 16
  },
  btn: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    margin: 10
  },
  doubleMarginTopBottom: {
    marginTop: 20,
    marginBottom: 20
  },
  isMarginSmallTopBottom: {
    marginTop: 10,
    marginBottom: 10
  },
  isMarginSmallTop: {
    marginTop: 10,
  },
  isMarginSmallBottom: {
    marginBottom: 10
  },
  isMarginSmall: {
    margin: 10
  },
  isMargin: {
    margin: 20
  },
  isMarginDoubleTopBottom: {
    marginTop: 40,
    marginBottom: 40
  },
  status: {
    backgroundColor: '#2771A2'
  },
  doubleMarginSides: {
    marginLeft: 20,
    marginRight: 20
  },
  marginSides: {
    marginLeft: 10,
    marginRight: 10
  },
  overlayReports: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#2771A2',
    width: width
  },
  overlayMyNewMe: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#16314E',
    width: width
  },
  section: {
    flex: 1, flexDirection: 'row', padding: 20
  },
  isPaddingless: {
    padding: 0
  },
  isMarginless: {
    margin: 0
  },
  isMarginlessTop: {
    marginTop: 0
  },
  isMarginlessBottom: {
    marginBottom: 0
  },
  isOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  isOpacity50: {
    opacity: 0.5
  },
  bgSection: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  subtitleSection: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: 10,
    color: 'white'
  },
  titleSection: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: 20,
    color: 'white'
  },
  sectionTitles: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 9999,
    marginLeft: 10
  },
  textCenter: {
    textAlign: 'center'
  },
  flexCentered: {
    justifyContent: 'center'
  },
  isLineHeight18: {
    lineHeight: 18
  }
})

export default styles
