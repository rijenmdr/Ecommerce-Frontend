import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../helper/axios';
import Breadcrumbs from '../../container/Breadcrumb';
import SearchedProducts from './container/SearchedProducts/SearchedProducts';
import SearchFilterList from './container/SearchFilterList/SearchFilterList';
import SearchHeader from './container/SearchHeader/SearchHeader';

//components
import Loading from '../../components/Loading';
import NoData from '../../components/NoData';

//css
import './Search.scss';

const fetchSearchedProducts = async (parameter) => {
    const [key, currentPage, searchTerm, category, sortBy, service, rating, minPrice, maxPrice] = parameter.queryKey
    console.log(key)
    const serviceData = service.map(ser => `${ser}`).join('-');
    const data = await axios.get(`/product/get-products?page=${currentPage}${category ? `&categoryId=${category}` : ''}${searchTerm ? `&search=${searchTerm}` : ''}${serviceData ? `&service=${serviceData}` : ''}${rating ? `&rating=${rating}` : ''}${minPrice ? `&min=${minPrice}` : ''}${maxPrice ? `&max=${maxPrice}` : ''}&sortBy=${sortBy}`)
    return data;
}

const SearchProducts = () => {
    const { search, state } = useLocation();
    const allQueryParam = new URLSearchParams(search)
    const searchTerm = allQueryParam.get('search');
    const category = allQueryParam.get('category');
    const page = parseInt(allQueryParam.get("page") || 1);

    const navigate = useNavigate();

    // const [page, setPage] = useState(1);
    const [brands, setBrands] = useState([]);
    const [viewType, setViewType] = useState('grid');
    const [showFilter, setShowFilter] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(page);
    const [productCount, setProductsCount] = useState(0);

    const [selectedService, setSelectedService] = useState([]);
    const [selectedRating, setSelectedRating] = useState('');
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [enable, setEnable] = useState(true);
    const [service, setService] = useState([
        {
            id: "1",
            label: "Cash On Delivery",
            checked: false,
            value: 'c'
        },
        {
            id: "2",
            label: "Digital Payment",
            checked: false,
            value: 'd'
        }
    ]);

    const [sortBy, setSortBy] = useState("date|-1");
    const [searchedProducts, setSearchedProducts] = useState([]);

    const prevPage = () => {
        setCurrentPage(prevVal => prevVal - 1);
    }

    const nextPage = () => {
        setCurrentPage(prevVal => prevVal + 1);
    }

    useEffect(() => {
        allQueryParam.set('page', currentPage);
        navigate(window.location.pathname + "?" + allQueryParam.toString())
    }, [currentPage])

    const changeCurrentPage = (index) => {
        if (currentPage === index + 1) {
            return;
        }
        setCurrentPage(index + 1)
    }

    const submitPrice = () => {
        setEnable(true)
        refetch();
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    useEffect(() => {
        width < 992 && setViewType('grid')
        width < 763 ? setShowFilter(false) : setShowFilter(true)
    }, [width])

    useEffect(() => {
        if (!page) {
            allQueryParam.set('page', 1);
            navigate(window.location.pathname + "?" + allQueryParam.toString())
        }
    }, [])

    console.log("brands", brands)

    const { status, refetch } = useQuery(['products', currentPage, searchTerm, category, sortBy, selectedService, selectedRating, minPrice, maxPrice], fetchSearchedProducts, {
        keepPreviousData: true,
        enabled: (enable) ? (!!currentPage || !!searchTerm || !!category || !!sortBy || !selectedService || !selectedRating) : false,
        retry: false,
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            setSearchedProducts(result.data.products);
            setProductsCount(result.data.totalProducts);
            window.scrollTo(0, 500)
            // const temp = result.data.brands
            // setBrands(temp.map( item=> ({...item, checked:false}) ));
        }
    });

    return (
        <div className="search-products">
            <Breadcrumbs />

            {/* Search Headers */}
            <SearchHeader
                viewType={viewType}
                setViewType={setViewType}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                searchTerm={searchTerm}
                category={state && state.selectedCategory.name}
                productCount={productCount}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                sortBy={sortBy}
                setSortBy={setSortBy}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />

            <div className='section-margin d-flex search-content'>
                {
                    showFilter &&
                    <SearchFilterList
                        setBrands={setBrands}
                        brands={brands}
                        selectedService={selectedService}
                        setSelectedService={setSelectedService}
                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        submitPrice={submitPrice}
                        setEnable={setEnable}
                        service={service}
                        setService={setService}
                    />
                }

                {
                    status === 'loading' &&
                    <Loading />
                }

                {
                    status === 'error' &&
                    <div className='w-100'>
                        <NoData />
                    </div>
                }

                {
                    status === "success" &&
                    <SearchedProducts
                        viewType={viewType}
                        searchedProducts={searchedProducts}
                    />

                }
            </div>

            {status === "success" && productCount !== 0 &&
                <div className='section-margin d-flex justify-content-end product-pagination'>
                    <Pagination className='d-flex flex-wrap'>
                        {
                            currentPage !== 1 &&
                            <Pagination.Prev
                                onClick={prevPage}
                            />
                        }
                        {
                            Array.from(Array(Math.ceil((productCount) / 9))).map((c, index) => (
                                <Pagination.Item
                                    active={currentPage === index + 1}
                                    onClick={() => changeCurrentPage(index)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        {
                            currentPage !== Math.ceil((productCount) / 9) &&
                            <Pagination.Next
                                onClick={nextPage}
                            />
                        }
                    </Pagination>
                </div>
            }
        </div>
    )
}

export default SearchProducts
