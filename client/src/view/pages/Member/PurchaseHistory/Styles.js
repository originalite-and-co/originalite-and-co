export function generateStyles({breakpoints}) {
    return {
        purchaseItem: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '5px',
            borderBottom: "1px solid #847A7A",
            position: 'relative',
            paddingLeft: '0px !important',
            paddingTop: '15px !important',

            [breakpoints.up('desktop')]: {
                marginTop: '25px',
                paddingBottom: '15px'
            }
        },
        purchaseItemdate: {
            position: 'absolute',
            left: '0',
            top: '0',
            fontFamily: "Open Sans",
            fontSize: '10px',
            lineHeight: '14px',
            color: '#000000',

            [breakpoints.up('desktop')]: {
                fontSize: '18px',
                lineHeight: '25px',
                fontWeight: '300',
                top: '-15px',
            }
        },
        itemInfoBlock: {
            marginLeft: '20px'
        },
        purchaseItemImg: {
            height: '97px',
            [breakpoints.up('desktop')]: {
                height: '174px',
            }
        },
        purchaseItemTitle: {
            textTransform: 'capitalize',
            fontFamily: "Open Sans",
            fontSize: '14px',
            lineHeight: '19px',
            color: '#000000',

            [breakpoints.up('desktop')]: {
                fontSize: '18px',
                lineHeight: '25px',
                paddingBottom: '9px'
            }
        },
        purchaseItemAddInfo: {
            fontFamily: "Open Sans",
            fontSize: '12px',
            lineHeight: '16px',
            color: '#847A7A',

            [breakpoints.up('desktop')]: {
                fontSize: '18px',
                lineHeight: '25px',
                fontWeight: '300',
            }
        }
    }
}
