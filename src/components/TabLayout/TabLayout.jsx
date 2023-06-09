import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubCategoryCard from '../../Shared/SubCategoryCard/SubCategoryCard';
import '@smastrom/react-rating/style.css'
import './TabLayout.css'

const TabLayout = () => {
    const [teddyBear, setTeddyBear] = useState([])
    const [dinosaur, setDinosaur] = useState([])
    const [horse, setHorse] = useState([])

    useEffect(() => {
        fetch('https://animal-toy-world-server.vercel.app/category?subcategory=TeddyBear')
            .then(res => res.json())
            .then(data => setTeddyBear(data))
    }, [])

    useEffect(() => {
        fetch('https://animal-toy-world-server.vercel.app/category?subcategory=Dinosaur')
            .then(res => res.json())
            .then(data => setDinosaur(data))
    }, [])

    useEffect(() => {
        fetch('https://animal-toy-world-server.vercel.app/category?subcategory=Horse')
            .then(res => res.json())
            .then(data => setHorse(data))
    }, [])

    return (
        <Tabs className='text-center'>
            <TabList>
                <Tab>Teddy bear</Tab>
                <Tab>Dinosaur</Tab>
                <Tab>Horse</Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-left">
                    {
                        teddyBear.map(bear => <SubCategoryCard key={bear._id}
                            toy={bear}
                        ></SubCategoryCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-left">
                    {
                        dinosaur.map(dino => <SubCategoryCard key={dino._id}
                            toy={dino}
                        ></SubCategoryCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-left">
                    {
                        horse.map(hor => <SubCategoryCard key={hor._id}
                            toy={hor}
                        ></SubCategoryCard>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default TabLayout;