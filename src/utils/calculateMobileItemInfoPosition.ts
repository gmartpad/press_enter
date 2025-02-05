const ITEM_INFO_DIALOG_WIDTH = 366
const VERTICAL_INCREMENTOR_GAP = 12
const VERTICAL_MARGIN = 15
const HORIZONTAL_SCROLLBAR_AVOIDANCE = 15
const DIALOG_BOX_SHADOW = 10

interface HorizontalPositioningProps { 
    left: string | number
    right: string | number 
}

function calculateMobileItemInfoPosition ({
    innerHeight,
    innerWidth,
    mouseX,
    mouseY,
    dialogHeight
}: {
    innerHeight: number,
    innerWidth: number,
    mouseX: number,
    mouseY: number,
    dialogHeight: number
}) {
    const BITS_SECTION_WIDTH = innerWidth * 0.3
    const IS_DESKTOP = (innerWidth >= 1024)

    let horizontalPositioning: HorizontalPositioningProps = {
        left: IS_DESKTOP ? mouseX - BITS_SECTION_WIDTH - (ITEM_INFO_DIALOG_WIDTH/2) : mouseX <= ((ITEM_INFO_DIALOG_WIDTH/2) + DIALOG_BOX_SHADOW) ? '10px' : mouseX - (ITEM_INFO_DIALOG_WIDTH/2),
        right: 'auto'
    }

    let verticalPositioning = {
        top: `${mouseY + VERTICAL_MARGIN}px`,
        bottom: 'auto',
        marginTop: IS_DESKTOP ? `${mouseY >= 32 ? '-4px' : '0px'}` : '0px',
        marginBottom: 'unset'
    }

    if(IS_DESKTOP) {
        horizontalPositioning = {
            left: 'auto',
            right: DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE 
        }
        verticalPositioning = {
            ...verticalPositioning,
            top: `${mouseY}px`,
        }
    }

    if(!IS_DESKTOP && (mouseX + (ITEM_INFO_DIALOG_WIDTH/2) + DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE) > innerWidth) {
        horizontalPositioning = {
            left: 'auto',
            right: (innerWidth - mouseX) <= ((ITEM_INFO_DIALOG_WIDTH/2) + DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE) ? '25px' : innerWidth - mouseX - (ITEM_INFO_DIALOG_WIDTH/2)
        }
    }

    if((mouseY + dialogHeight + VERTICAL_MARGIN + VERTICAL_INCREMENTOR_GAP + DIALOG_BOX_SHADOW) > innerHeight) {
        verticalPositioning = {
            top: 'auto',
            bottom: `${innerHeight - mouseY + (IS_DESKTOP ? 0 : VERTICAL_MARGIN)}px`,
            marginTop: 'unset',
            marginBottom: IS_DESKTOP ? `${(innerHeight - mouseY) <= 32 ? '-4px' : '0px'}` : `${(innerHeight - mouseY - VERTICAL_MARGIN) <= 32 ? '15px' : '0px'}`
        }
    }

    return {
        ...horizontalPositioning,
        ...verticalPositioning
    }
}

export default calculateMobileItemInfoPosition