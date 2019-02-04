import CMS from 'netlify-cms'

import DesignersPreview from './preview-templates/DesignersPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('designers', DesignersPreview)
