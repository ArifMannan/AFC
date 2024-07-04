import { getBanners, addBanner, updateBanner, deleteBanner } from '../services/bannerService';

export const getBannersController = async (req, res) => {
    try {
        const result = await getBanners();
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in getBannersController:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

export const addBannerController = async (req, res) => {
    try {
        const { title, image } = await req.json();
        const result = await addBanner(title, image);
        return new Response(JSON.stringify({ message: 'Banner added successfully', result }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in addBannerController:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

export const updateBannerController = async (req, res) => {
    try {
        const { id, title, image } = await req.json();
        const result = await updateBanner(id, title, image);
        return new Response(JSON.stringify({ message: 'Banner updated successfully', result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in updateBannerController:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

export const deleteBannerController = async (req, res) => {
    try {
        const { id } = await req.json();
        const result = await deleteBanner(id);
        return new Response(JSON.stringify({ message: 'Banner deleted successfully', result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in deleteBannerController:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
