import * as SvgIconsComponent from '../components/icons'


export const getIconComponentByName = ( name ) => {
    const ComponentMap = {
        facebook: SvgIconsComponent.Facebook,
        twitter: SvgIconsComponent.Twitter,
        instagram: SvgIconsComponent.Instagram,
        youtube: SvgIconsComponent.Youtube
    }

    if (name in ComponentMap) {
        const IconComponent = ComponentMap[name];
        return <IconComponent />
    } else {
        return Null
    }

}