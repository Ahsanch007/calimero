import localFont from "next/font/local";

export const drukTrial = localFont({
    src: [
        {
            path: '../public/fonts/Druk-Bold-Trial.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Druk-Heavy-Trial.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'swap',
});

export const neueHaasDisplay = localFont({
    src: [
        {
            path: '../public/fonts/NeueHaasDisplayBoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../public/fonts/NeueHaasDisplayMediu.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    display: 'swap',
});
