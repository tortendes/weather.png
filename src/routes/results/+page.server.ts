import type { Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const location = data.get('location')?.toString();
        if (!location) throw redirect(300, '/')
        const apiRequest = await fetch('https://concerned-gray-bracelet.cyclic.app/api/v1/generate?location=' + encodeURIComponent(location));
        const apiJson = await apiRequest.json()

        if (apiJson.status == 0) {
            throw error(404, 'Location not found')
        }

        return apiJson;
    }
} satisfies Actions;