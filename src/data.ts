import aerospace from './assets/applications/aerospace.webp';
import aerospaceTop from './assets/applications/spaceship-white.webp';

import agriculture from './assets/applications/agriculture.webp';
import agricultureTop from './assets/applications/agriculture-white.webp';

import automotive from './assets/applications/automotive.webp';
import automotiveTop from './assets/applications/piston-white.webp';

import defence from './assets/applications/defence.webp';
import defenceTop from './assets/applications/shield-white.webp';

import renewable from './assets/applications/renewable.webp';
import renewableTop from './assets/applications/renewable-white.webp';

import environment from './assets/applications/environment.webp';
import environmentTop from './assets/applications/environment-white.webp';

import marine from './assets/applications/marine.webp';
import marineTop from './assets/applications/anchor-white.webp';


import { GiRibbonShield } from "react-icons/gi";
import { MdSolarPower, MdEdgesensorHigh } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const FEATURED_PRODUCTS = [
    {
        name: 'Octantis 2 INS-GNSS',
        desc: 'Rugged High Reliability Inertial Navigation System for Land and Unmanned Applications',
        imgUrl: 'https://aeronsystems.com/Admin/uploads/Product/Product%20images/152/OCT2-NS7300D-01A_3.png'
    },
    {
        name: 'Pollux 2',
        desc: 'Micro-miniature Inertial Navigation Unit for Unmanned Systems',
        imgUrl: 'https://aeronsystems.com/Admin/uploads/Product/Product%20images/151/PLX2-NS10_2.png'
    },
    {
        name: 'XTREME - Smart Data Logger',
        desc: 'Class A compliant Data logger as per IEC61724-1:2021 and IEC61400-12-1:2022',
        imgUrl: 'https://aeronsystems.com/Admin/uploads/Product/Product%20images/148/XG920_4.png'
    },
    {
        name: 'Air Temperature, Humidity, Pressure sensor',
        desc: 'Class A Sensor designed as per IEC61724-1:2021',
        imgUrl: 'https://aeronsystems.com/Admin/uploads/Product/Product%20images/157/Air_temp_sensor_1.png'
    },
    {
        name: 'OCT3-NS7700T',
        desc: 'Rugged Dual Antenna Inertial Navigation System for Unmanned and Land applications',
        imgUrl: 'https://aeronsystems.com/Admin/uploads/Product/Product%20images/164/OCT2-NS7300D.png'
    }
]

export const APPLICATIONS = [
    {
        name: 'Aerospace',
        bgImg: aerospace,
        topImg: aerospaceTop,
        descPoints: [
            'Reliable, field proven technology',
            'Type approved navigation solutions',
            'Superior sensor-fusion algorithms',
            'Satisfied Aerospace Customers'
        ]
    },
    {
        name: 'Agriculture',
        bgImg: agriculture,
        topImg: agricultureTop,
        descPoints: [
            'Monitoring solutions for Smart Agriculture.',
            'Maximize yield with soil data at the farm level.',
            'Manage impact of disaster with real-time data of rain, wind, flood, etc.',
            'All weather operating devices.'
        ]
    },
    {
        name: 'Automotive',
        bgImg: automotive,
        topImg: automotiveTop,
        descPoints: [
            'Robust Supply-Chains',
            'Automotive Qualified Sensors',
            '10,000+ sensors in field',
            'Marquee OEM customers'
        ]
    },
    {
        name: 'Defence',
        bgImg: defence,
        topImg: defenceTop,
        descPoints: [
            'Robust Supply-Chains',
            'Extended 15 year Lifecycle Support',
            'MIL Qualified Product Offering',
            'Part of various defence programs'
        ]
    },
    {
        name: 'Renewable',
        bgImg: renewable,
        topImg: renewableTop,
        descPoints: [
            'Met stations for Solar Power Plants',
            'Met stations for Wind Farms',
            'IEC Standards Complied System',
            'Customized to suit project requirements'
        ]
    },
    {
        name: 'Environment',
        bgImg: environment,
        topImg: environmentTop,
        descPoints: [
            'Smart monitoring for Air and Water pollution',
            'Helps in complying with regulatory compliances',
            'Meet company\'s SDG goals',
            'Lower installation and operational cost'
        ]
    },
    {
        name: 'Marine',
        bgImg: marine,
        topImg: marineTop,
        descPoints: [
            'Navigation solutions for UUVs and USVs',
            'Qualified products for marine environment',
            'Water quality monitoring of lakes, rivers, ETP/STP installations',
        ]
    }
]

export const ACCOMPLISHMENTS = [
    {
        count: 50000,
        text: 'Hours on road tested INS systems',
        icon: GiRibbonShield
    },
    {
        count: 32,
        text: 'GW Solar Power Plant monitoring',
        icon: MdSolarPower
    },
    {
        count: 10000,
        text: 'Inertial Sensors in field',
        icon: MdEdgesensorHigh
    },
    {
        count: 1000,
        text: 'Weather Monitoring Stations on field',
        icon: TiWeatherPartlySunny
    }
];

export const TESTIMONIALS = [
    {
        name: 'Renew',
        text: 'We have been using Aeron Systems products for many years on site. The product functionality and accuracy meet our expectations. Overall, we are very satisfied with their products and services.'
    },
    {
        name: 'Hero Future Energies',
        text: 'Very satisfied with the WMS system and services provided by Aeron Systems. The installation and commissioning were very smooth, and their service & support has met our expectations.'
    },
    {
        name: 'Adani',
        text: 'Excellent support by Aeron team members.'
    },
    {
        name: 'Clean Solar',
        text: 'The accuracy of the information provided is excellent and very satisfied with service and support.'
    }
]