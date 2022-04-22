import Link from 'next/link'
import { default as React, useState } from "react"
import { FaSearch } from "react-icons/fa"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  // PoweredBy,
} from "react-instantsearch-dom"

import { Button, Modal } from "react-bootstrap";
import { AiOutlineClose } from 'react-icons/ai';
import AddTopic from "../../AddTopic";

const HitCount = connectStateResults(({ searchResults }) => {

  // modal form function
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const hitCount = searchResults && searchResults.nbHits


  return hitCount > 0 ? (
    <div className="HitCount">
      {/*    {hitCount} result {hitCount !== 1 ? `s` : ``} */}
    </div>
  ) :
    <><div><hr className="my-0 py-0" />
      <div className="d-flex justify-content-between align-items-center p-2 pr-3">
        <h6 className="text-black pt-0 my-0 px-4 font-weight-normal">No Research Topic Found</h6>
        <button className="btn btn-primary grad-btn  border-0 algolia-search-btn" style={{ lineHeight: "1.2" }} onClick={handleShow}>
          Request Your Topic
        </button>
      </div>
    </div>

      {/* add topic modal form */}
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header><Modal.Title className="pl-3">Request Your Topic</Modal.Title><AiOutlineClose className="mt-2" onClick={handleClose} style={{ cursor: "pointer" }} /></Modal.Header>
        <Modal.Body className="mx-2"><AddTopic handleClose={handleClose} /></Modal.Body>
      </Modal>
    </>
})






const SearchResult = ({ indices, className }) => {

  const PageHit = ({ hit }) => {
  
    return(
      <Link href={`domain/${hit.slug}`}><a>
        <div className="text-ellipsis" style={{ padding: "12px", paddingLeft: "18px" }}>
          <div className="d-flex results-div">
            <FaSearch style={{ color: "grey" }} className="mr-3" />
            <h6 className="markdown" style={{ WebkitLineClamp: "1", color: "black", textDecoration: "none", fontWeight: "500" }}>
              <Highlight attribute="title" hit={hit} tagName="mark" />
            </h6>
          </div>
        </div>
      </a></Link>
    )
  }


const HitsInIndex = ({ index }) => {
  
  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>
  )
}

  return (
    <div className={className}>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      {/* <PoweredBy /> */}
    </div>
  )
}


export default SearchResult