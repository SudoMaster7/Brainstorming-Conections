import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/event/:eventId
 * Get public event information
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    // TODO: Fetch event details from database
    return NextResponse.json(
      {
        id: params.eventId,
        city: 'Nice',
        venueName: 'TBD',
        eventDate: '2025-06-15',
        capacity: 40,
        status: 'open',
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Event not found' },
      { status: 404 }
    )
  }
}
