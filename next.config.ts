import type { NextConfig } from "next";

const nextConfig: NextConfig = {
redirects:async()=>{
    return [
        {
            source: '/',
            destination: '/fa',
            permanent: false,
        }
    ]
}
};

export default nextConfig;
