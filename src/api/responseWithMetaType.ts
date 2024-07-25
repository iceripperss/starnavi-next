export type ResponseWithMetaT<T> = {
    count: number,
    next: null | string,
    previous: null | string,
    results: Array<T>
}
