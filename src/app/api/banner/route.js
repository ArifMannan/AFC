import { getBannersController, addBannerController, updateBannerController, deleteBannerController } from '../../../apicomponent/controllers/bannerController';

export async function GET(req, res) {
    return getBannersController(req, res);
}

export async function POST(req, res) {
    return addBannerController(req, res);
}

export async function PUT(req, res) {
    return updateBannerController(req, res);
}

export async function DELETE(req, res) {
    return deleteBannerController(req, res);
}
