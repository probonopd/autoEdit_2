import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';

export default {
    processors: [
        autoprefixer({
            browsers: [
                'Last 2 versions',
                'not ie <= 9',
                'iOS >= 7',
                'Chrome >= 35',
                'Firefox >=29',
                'ChromeAndroid >= 4.4',
            ],
        }),
        mqpacker({
            sort: true, // sort media queries min to max
        }),
    ],
};
