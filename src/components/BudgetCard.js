import { Card } from "react-bootstrap";
import { currencyFormatter } from "../utils";


export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div>
                    {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
                </div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
