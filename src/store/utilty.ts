export const updatedObject = (oldObject:any, updatedProperties:any) => {
    return{
        ...oldObject,
        ...updatedProperties
    }
}