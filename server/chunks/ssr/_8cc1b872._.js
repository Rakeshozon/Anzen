module.exports = {

"[project]/.next-internal/server/app/city/[cityName]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cities": (()=>cities),
    "findImage": (()=>findImage),
    "getCities": (()=>getCities),
    "getCityByName": (()=>getCityByName),
    "getFeaturedCities": (()=>getFeaturedCities),
    "getStates": (()=>getStates),
    "states": (()=>states)
});
const states = [
    {
        name: 'Andaman and Nicobar Islands',
        cities: [
            'Port Blair'
        ]
    },
    {
        name: 'Andhra Pradesh',
        cities: [
            'Visakhapatnam',
            'Tirupati',
            'Vijayawada'
        ]
    },
    {
        name: 'Arunachal Pradesh',
        cities: [
            'Tawang',
            'Itanagar'
        ]
    },
    {
        name: 'Assam',
        cities: [
            'Guwahati',
            'Kaziranga'
        ]
    },
    {
        name: 'Bihar',
        cities: [
            'Patna',
            'Gaya',
            'Nalanda'
        ]
    },
    {
        name: 'Chandigarh',
        cities: [
            'Chandigarh'
        ]
    },
    {
        name: 'Chhattisgarh',
        cities: [
            'Raipur',
            'Bastar'
        ]
    },
    {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        cities: [
            'Daman',
            'Diu'
        ]
    },
    {
        name: 'Delhi',
        cities: [
            'Delhi'
        ]
    },
    {
        name: 'Goa',
        cities: [
            'Panaji',
            'Madgaon'
        ]
    },
    {
        name: 'Gujarat',
        cities: [
            'Ahmedabad',
            'Surat',
            'Vadodara',
            'Kutch'
        ]
    },
    {
        name: 'Haryana',
        cities: [
            'Gurugram',
            'Faridabad',
            'Kurukshetra'
        ]
    },
    {
        name: 'Himachal Pradesh',
        cities: [
            'Shimla',
            'Manali',
            'Dharamshala'
        ]
    },
    {
        name: 'Jammu and Kashmir',
        cities: [
            'Srinagar',
            'Jammu',
            'Leh'
        ]
    },
    {
        name: 'Jharkhand',
        cities: [
            'Ranchi',
            'Jamshedpur'
        ]
    },
    {
        name: 'Karnataka',
        cities: [
            'Bengaluru',
            'Mysuru',
            'Hampi'
        ]
    },
    {
        name: 'Kerala',
        cities: [
            'Kochi',
            'Thiruvananthapuram',
            'Munnar',
            'Alappuzha'
        ]
    },
    {
        name: 'Ladakh',
        cities: [
            'Leh',
            'Kargil'
        ]
    },
    {
        name: 'Lakshadweep',
        cities: [
            'Kavaratti'
        ]
    },
    {
        name: 'Madhya Pradesh',
        cities: [
            'Bhopal',
            'Indore',
            'Khajuraho'
        ]
    },
    {
        name: 'Maharashtra',
        cities: [
            'Mumbai',
            'Pune',
            'Aurangabad'
        ]
    },
    {
        name: 'Manipur',
        cities: [
            'Imphal'
        ]
    },
    {
        name: 'Meghalaya',
        cities: [
            'Shillong',
            'Cherrapunji'
        ]
    },
    {
        name: 'Mizoram',
        cities: [
            'Aizawl'
        ]
    },
    {
        name: 'Nagaland',
        cities: [
            'Kohima',
            'Dimapur'
        ]
    },
    {
        name: 'Odisha',
        cities: [
            'Bhubaneswar',
            'Puri',
            'Konark'
        ]
    },
    {
        'name': 'Puducherry',
        'cities': [
            'Puducherry'
        ]
    },
    {
        name: 'Punjab',
        cities: [
            'Amritsar',
            'Ludhiana'
        ]
    },
    {
        name: 'Rajasthan',
        cities: [
            'Jaipur',
            'Udaipur',
            'Jodhpur',
            'Jaisalmer'
        ]
    },
    {
        name: 'Sikkim',
        cities: [
            'Gangtok',
            'Pelling'
        ]
    },
    {
        'name': 'Tamil Nadu',
        'cities': [
            'Chennai',
            'Madurai',
            'Kanyakumari'
        ]
    },
    {
        'name': 'Telangana',
        'cities': [
            'Hyderabad'
        ]
    },
    {
        'name': 'Tripura',
        'cities': [
            'Agartala'
        ]
    },
    {
        name: 'Uttar Pradesh',
        cities: [
            'Lucknow',
            'Varanasi',
            'Agra'
        ]
    },
    {
        name: 'Uttarakhand',
        cities: [
            'Dehradun',
            'Rishikesh',
            'Nainital'
        ]
    },
    {
        name: 'West Bengal',
        cities: [
            'Kolkata',
            'Darjeeling'
        ]
    }
];
const cities = [
    {
        id: 'bengaluru',
        name: 'Bengaluru',
        state: 'Karnataka',
        description: 'Known as the "Silicon Valley of India," Bengaluru is a vibrant city with a blend of modern tech culture and rich history.',
        image: 'bengaluru-city',
        attractions: []
    },
    {
        id: 'delhi',
        name: 'Delhi',
        state: 'Delhi',
        description: 'The capital city of India, Delhi is a massive metropolitan area with a rich history visible in its many ancient landmarks.',
        image: 'delhi-city',
        attractions: []
    },
    {
        id: 'jaipur',
        name: 'Jaipur',
        state: 'Rajasthan',
        description: 'The "Pink City," Jaipur is the capital of Rajasthan, known for its stunning royal palaces and vibrant markets.',
        image: 'jaipur-city',
        attractions: []
    },
    {
        id: 'agra',
        name: 'Agra',
        state: 'Uttar Pradesh',
        description: 'Home to the iconic Taj Mahal, Agra is a city on the banks of the Yamuna river, rich in Mughal history.',
        image: 'agra-city',
        attractions: []
    },
    {
        id: 'goa',
        name: 'Goa',
        state: 'Goa',
        description: 'Famous for its beautiful beaches, vibrant nightlife, Portuguese architecture, and laid-back atmosphere.',
        image: 'goa-city',
        attractions: []
    },
    {
        id: 'chennai',
        name: 'Chennai',
        state: 'Tamil Nadu',
        description: 'A major cultural, economic, and educational center in South India.',
        image: 'chennai-city',
        attractions: []
    },
    {
        id: 'kolkata',
        name: 'Kolkata',
        state: 'West Bengal',
        description: 'Known as the "City of Joy," it\'s the cultural capital of India.',
        image: 'kolkata-city',
        attractions: []
    },
    {
        id: 'hyderabad',
        name: 'Hyderabad',
        state: 'Telangana',
        description: 'A hub of technology and history, famous for its biryani and Charminar.',
        image: 'hyderabad-city',
        attractions: []
    },
    {
        id: 'mumbai',
        name: 'Mumbai',
        state: 'Maharashtra',
        description: 'The bustling financial capital of India, famous for Bollywood, colonial architecture, and vibrant street life.',
        image: 'mumbai-city',
        attractions: []
    }
];
const getCities = ()=>cities;
const getCityByName = (name)=>cities.find((c)=>c.name.toLowerCase() === name.toLowerCase());
const getFeaturedCities = ()=>cities;
const getStates = ()=>states;
const findImage = (id)=>{
    // In a real app, this would be a more robust lookup.
    // For now, we are just mocking a simple find.
    const allImages = [
        ...cities.map((c)=>({
                id: c.image,
                url: `https://picsum.photos/seed/${c.image}/800/600`
            }))
    ];
    return allImages.find((img)=>img.id === id);
};
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero\",\"description\":\"A beautiful landscape representing travel in India.\",\"imageUrl\":\"https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxpbmRpYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTk2OTE4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"india landscape\"},{\"id\":\"bengaluru-city\",\"description\":\"Skyline of Bengaluru\",\"imageUrl\":\"https://images.unsplash.com/photo-1580906185642-01432790adec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxiZW5nYWx1cnUlMjBza3lsaW5lfGVufDB8fHx8MTc1OTY5MTg4MHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bengaluru skyline\"},{\"id\":\"delhi-city\",\"description\":\"Iconic landmark in Delhi\",\"imageUrl\":\"https://images.unsplash.com/photo-1716747713303-0cd4a88c9112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkZWxoaSUyMG1vbnVtZW50fGVufDB8fHx8MTc1OTYwMzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"delhi monument\"},{\"id\":\"jaipur-city\",\"description\":\"Hawa Mahal in Jaipur\",\"imageUrl\":\"https://images.unsplash.com/photo-1586356307549-32c0684da5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxqYWlwdXIlMjBwYWxhY2V8ZW58MHx8fHwxNzU5NjAzNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"jaipur palace\"},{\"id\":\"mumbai-city\",\"description\":\"Gateway of India in Mumbai\",\"imageUrl\":\"https://images.unsplash.com/photo-1562979314-1ace75b44e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdW1iYWl8ZW58MHx8fHwxNzU5NzA0MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mumbai landmark\"},{\"id\":\"agra-city\",\"description\":\"The Taj Mahal in Agra\",\"imageUrl\":\"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhZ3JhfGVufDB8fHx8MTc1OTcwNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"agra tajmahal\"},{\"id\":\"goa-city\",\"description\":\"A beach in Goa\",\"imageUrl\":\"https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaHxlbnwwfHx8fDE3NTk3MDQyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"goa beach\"},{\"id\":\"chennai-city\",\"description\":\"Chennai Central Railway Station\",\"imageUrl\":\"https://images.unsplash.com/photo-1582510003544-6c7e63c16823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80\",\"imageHint\":\"chennai station\"},{\"id\":\"kolkata-city\",\"description\":\"Howrah Bridge in Kolkata\",\"imageUrl\":\"https://images.unsplash.com/photo-1572459425825-1e3df6307ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80\",\"imageHint\":\"kolkata bridge\"},{\"id\":\"hyderabad-city\",\"description\":\"Charminar in Hyderabad\",\"imageUrl\":\"https://images.unsplash.com/photo-1589332213939-c563632388e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80\",\"imageHint\":\"hyderabad monument\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}}),
"[project]/src/components/city/AttractionsTabs.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AttractionsTabs": (()=>AttractionsTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AttractionsTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AttractionsTabs() from the server but AttractionsTabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/city/AttractionsTabs.tsx <module evaluation>", "AttractionsTabs");
}}),
"[project]/src/components/city/AttractionsTabs.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AttractionsTabs": (()=>AttractionsTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AttractionsTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AttractionsTabs() from the server but AttractionsTabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/city/AttractionsTabs.tsx", "AttractionsTabs");
}}),
"[project]/src/components/city/AttractionsTabs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$city$2f$AttractionsTabs$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/city/AttractionsTabs.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$city$2f$AttractionsTabs$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/city/AttractionsTabs.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$city$2f$AttractionsTabs$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/app/city/[cityName]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CityPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$city$2f$AttractionsTabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/city/AttractionsTabs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function CityPage({ params }) {
    const city = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityByName"])(params.cityName);
    if (!city) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const cityImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((img)=>img.id === city.image);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[40vh] w-full flex items-end justify-start text-white p-6 md:p-8",
                children: [
                    cityImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: cityImage.imageUrl,
                        alt: cityImage.description,
                        fill: true,
                        className: "object-cover",
                        priority: true,
                        "data-ai-hint": cityImage.imageHint
                    }, void 0, false, {
                        fileName: "[project]/src/app/city/[cityName]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/city/[cityName]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight",
                                children: city.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/city/[cityName]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-3xl text-base sm:text-lg text-neutral-200 mt-2",
                                children: city.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/city/[cityName]/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/city/[cityName]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/city/[cityName]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                    fileName: "[project]/src/app/city/[cityName]/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this),
                                " Go Back Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/city/[cityName]/page.tsx",
                            lineNumber: 56,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/city/[cityName]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$city$2f$AttractionsTabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttractionsTabs"], {
                        attractions: city.attractions
                    }, void 0, false, {
                        fileName: "[project]/src/app/city/[cityName]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/city/[cityName]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/city/[cityName]/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/city/[cityName]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/city/[cityName]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_8cc1b872._.js.map