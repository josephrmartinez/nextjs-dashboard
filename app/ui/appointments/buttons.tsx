import { PencilIcon, PlusIcon, TrashIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteAppointment } from '@/app/lib/actions';

export function CreateAppointment() {
  return (
    <Link
      href="/dashboard/appointments/create"
      className="flex h-10 items-center rounded-lg bg-teal-600 px-4 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add Appointment</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ReadAppointment({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/appointments/${id}`}
      className="flex flex-row rounded-md text-teal-700 border border-gray-200 p-2 transition-colors hover:bg-gray-100"
    >
      <div className='text-sm '>view appointment</div>
      <ArrowRightIcon className="h-5 md:ml-4 md:mr-1" />
    </Link>
  );
}

export function UpdateAppointment({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/appointments/${id}/edit`}
      className="flex flex-row w-20 h-10 rounded-md border p-2 bg-teal-700 text-gray-50 transition-colors hover:bg-teal-600"
    >
      
      <PencilIcon className="w-5" />
      <div className='tracking-wider ml-1'>edit</div>
    </Link>
  );
}

export function DeleteAppointment({ id }: { id: string }) {
  const deleteAppointmentWithId = deleteAppointment.bind(null, id);
  return (
    <form action={deleteAppointmentWithId}>
      <button className="rounded-md border p-2 transition-colors hover:bg-red-500 hover:text-white">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
