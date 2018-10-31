import {
  StyleSheet,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  page: {
    flex: 1
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
  isBold: {
    fontWeight: 'bold'
  },
  fontWhite18: {
    color: '#FFFFFF',
    fontSize: 18
  },
  fontWhite16: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14
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
  status: {
    backgroundColor: '#2771A2',
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
  }
})

export default styles
