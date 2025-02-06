const ITEM_INFO_DIALOG_WIDTH = 366
const VERTICAL_INCREMENTOR_GAP = 12
const VERTICAL_MARGIN = 15
const HORIZONTAL_SCROLLBAR_AVOIDANCE = 15
const DIALOG_BOX_SHADOW = 10

interface HorizontalPositioningProps { 
    left: string | number
    right: string | number 
}

interface VerticalPositioningProps {
    top: string | number 
    bottom: string | number
    marginTop: string | number
    marginBottom: string | number
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

    let verticalPositioning: VerticalPositioningProps = {
        top: `${mouseY + VERTICAL_MARGIN}px`,
        bottom: 'auto',
        marginTop: 0,
        marginBottom: 'unset'
    }

    if(IS_DESKTOP) {
        horizontalPositioning = {
            left: 'auto',
            right: DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE 
        }
        verticalPositioning = {
            ...verticalPositioning,
            top: (mouseY + dialogHeight) >= innerHeight ? 'auto' : `${mouseY >= 37 ? mouseY : 37}px`,
            bottom: (mouseY + dialogHeight) >= innerHeight ? 4 : 'auto'
        }
    }

    if(!IS_DESKTOP && (mouseX + (ITEM_INFO_DIALOG_WIDTH/2) + DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE) > innerWidth) {
        horizontalPositioning = {
            left: 'auto',
            right: (innerWidth - mouseX) <= ((ITEM_INFO_DIALOG_WIDTH/2) + DIALOG_BOX_SHADOW + HORIZONTAL_SCROLLBAR_AVOIDANCE) ? '25px' : innerWidth - mouseX - (ITEM_INFO_DIALOG_WIDTH/2)
        }
    }

    if(!IS_DESKTOP && (mouseY + dialogHeight + VERTICAL_MARGIN + VERTICAL_INCREMENTOR_GAP + DIALOG_BOX_SHADOW) > innerHeight) {
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