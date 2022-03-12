import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProperties, sortProperties } from "../../store/reducerSlice/property";
import PropView from "../common/propView/PropView";
import { properties } from "./propertiesData";
const range = [40000, 400000, 4000000, 40000000, 400000000]

const Explore = () => {
    const [view, setView] = useState('grid');
    const [filterOpt, setFilterOpt] = useState({
        min: range[0],
        max: range[range.length-1],
        filter: '',
        sortBy: 'recommended'
    })

    const dispatch = useDispatch();

    const { properties: propertyList, filterProperties } = useSelector(state => state.property)

    useEffect(() => {
        dispatch(setProperties(properties))
    }, [])

    useEffect(() => {
        dispatch(sortProperties(filterOpt))
    }, [filterOpt])

    return (
        <>
            <div className="filterBlock">
                <h4>Price Range</h4>
                <div className="priceRange">
                    <Form.Select
                        onChange={(e)=>setFilterOpt({
                            ...filterOpt,
                            min: e.target.value
                        })}
                    >
                        <option value={range[0]}>Min</option>
                        {
                            range.map((p, i) => {
                                return filterOpt.max > p && <option value={p}>{p}</option>
                            })
                        }
                    </Form.Select>
                    <span>-</span>
                    <Form.Select
                        onChange={(e)=>setFilterOpt({
                            ...filterOpt,
                            max: e.target.value
                        })}
                    >
                        <option value={range[range.length-1]}>Max </option>
                        {
                            range.map((p, i) => {
                                return filterOpt.min < p && <option value={p}>{p}</option>
                            })
                        }
                    </Form.Select>
                </div>
                <Form.Select
                    onChange={(e)=>setFilterOpt({
                        ...filterOpt,
                        filter: e.target.value
                    })}
                >
                    <option value="">Filter</option>
                    <option value="1 bed">1 bed</option>
                    <option value="2 beds">2 beds</option>
                </Form.Select>
            </div>
            <div className="sortBlock">
                <div className="totalProperty">
                    {filterProperties && filterProperties.length}
                    <span> of </span>
                    {propertyList && propertyList.length} Homes
                </div>
                <div className="sortBy">
                <Form.Select
                    onChange={(e)=>setFilterOpt({
                        ...filterOpt,
                        sortBy: e.target.value
                    })}
                >
                    <option value="recommended">Sort by Recommended</option>
                    <option value="price">Sort by Price</option>
                    <option value="beds">Sort by beds</option>
                </Form.Select>
                </div>
                <div className="viewOpt">
                    <Button onClick={() => setView('grid')} className={view === 'grid' && 'active'}>Grid View</Button>
                    <Button onClick={() => setView('list')} className={view === 'list' && 'active'}>Listing View</Button>
                </div>
            </div>
            <div className="flex">
                {
                    filterProperties && filterProperties.map((property, i) => {
                        return <PropView property={property} view={view} key={i} />
                    })
                }
            </div>
        </>
    )
}

export default Explore;