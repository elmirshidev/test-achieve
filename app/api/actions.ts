'use server'

import { revalidateTag } from 'next/cache'

export default async function revalidationFunction(tag:string) {
    revalidateTag(tag)
}