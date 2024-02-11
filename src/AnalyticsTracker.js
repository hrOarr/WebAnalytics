// AnalyticsTracker.js
import { useEffect } from 'react';
import { platform } from 'platform';

const AnalyticsTracker = ({ appId }) => {
    useEffect(() => {
        const trackPageView = () => {
            const data = {
                appId: appId,
                url: window.location.href,
                timestamp: new Date().toISOString()
            };
            // Send tracking data to server
            // fetch('https://your-analytics-service.com/track', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // });
            console.log("Collected data: ", JSON.stringify(data));


            // Create an object to store tracking data
            let trackingData = {};

// Function to extract URL parameters
            function getUrlParams(url) {
                let params = {};
                let urlParams = new URLSearchParams(url);
                for (const [key, value] of urlParams.entries()) {
                    params[key] = value;
                }
                return params;
            }

// Collect URL data
            trackingData.url = window.location.href;
            trackingData.referrer = document.referrer;
            trackingData.type = 'pageView'; // Always pageView for page views

// Collect origin and country data (You can use IPStack, ipapi, or similar service)
// Example: Fetch country data based on IP address
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    // Use data.ip to get user's IP address
                    // Use Geolocation API or IP-based service to determine country
                    // Update trackingData.country.isoCode and other related fields
                    console.log("Data:: ", data)
                })
                .catch(error => console.error('Error fetching IP address:', error));

// Collect campaign and referrer data
            let urlParams = getUrlParams(trackingData.url);
            trackingData.utm_campaign = urlParams['utm_campaign'] || '';
            trackingData.utm_source = urlParams['utm_source'] || '';
            trackingData.utm_medium = urlParams['utm_medium'] || '';
            trackingData.utm_term = urlParams['utm_term'] || '';
            trackingData.utm_content = urlParams['utm_content'] || '';
            trackingData.source = urlParams['source'] || '';
            trackingData.ref = urlParams['ref'] || '';

// Collect browser and system data
//             trackingData.platform = platform.parse(navigator.userAgent)
            trackingData.browser = navigator.userAgent;
            trackingData.isMobile = /Mobi/i.test(navigator.userAgent);
            trackingData.isTablet = /(iPad|Android|Nexus|Tablet)/i.test(navigator.userAgent);
            trackingData.isDesktop = !trackingData.isMobile && !trackingData.isTablet;
            trackingData.isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            trackingData.isBot = /(bot|googlebot|crawler|spider|robot|crawling)/i.test(navigator.userAgent);

            console.log("Tracking Data:: ", trackingData)
        };

        // Track page view on component mount
        trackPageView();

        // Clean-up function
        return () => {
            // Additional clean-up logic if needed
        };
    }, [appId]);

    return null; // Render nothing in the DOM
};

export default AnalyticsTracker;