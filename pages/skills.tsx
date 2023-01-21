import Header from "../components/Header";

const skill = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-5 p-32 dark:bg-slate-800 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">HTML</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                웹 접근성 및 웹 표준을 위해{" "}
                <span className="font-bold">section</span>,
                <span className="font-bold"> article </span>
                등의 시맨틱 태그를 이용하여 프로젝트에 활용이 가능합니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">CSS</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                <span className="font-bold">flex</span>를 활용한 컨텐츠 배치가
                가능합니다.
              </li>
              <li className="text-base text-gray-300">
                적절한 페이지에 반응형 디자인 적용이 가능합니다.
              </li>
              <li className="text-base text-gray-300">
                UI/UX 관점에서 어떻게 하면 사용자에게 더 좋은 서비스를 제공할지
                고민하고 있습니다.
              </li>
              <li className="text-base text-gray-300">
                사용 가능한 CSS 프레임워크 및 라이브러리 : Tailwind CSS,
                styled-components
              </li>
            </ul>
          </div>
        </div>
        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">JavaScript</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                ES2015(ES6) 문법을 이해하고 알고리즘 및 프로젝트에 활용이
                가능합니다.
              </li>
              <li className="text-base text-gray-300">
                <span className="font-bold">axios</span>를 활용하여
                <span className="font-bold"> REST API</span> 연동 작업이
                가능합니다.
              </li>
            </ul>
          </div>
        </div>

        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">React</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                React-Query, SWR, Recoil, Redux 등의 라이브러리를 통하여
                클라이언트 및 서버 상태 관리가 가능합니다.
              </li>
              <li className="text-base text-gray-300">
                React의 SPA 개념을 이해하고 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">TypeScript</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                자바스크립트를 사용하여 사이드 프로젝트를 진행하면서 함수로
                들어오는 인자의 타입을 명확하게 할 필요성을 느꼈고 이로 인해
                타입스크립트를 채택하게 되었습니다.
              </li>
              <li className="text-base text-gray-300">
                마이그레이션 작업을 하는 과정에서 타입스크립트에 관련된 ESLint
                설정이 추가로 필요하다는 것을 알게 되었습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-60 overflow-hidden rounded bg-slate-700 shadow-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              <span className="text-[#EBEB09]">UI/UX</span>
            </div>
            <ul className="space-y-2">
              <li className="text-base text-gray-300">
                사용자에게 좀 더 나은 서비스를 제공하기 위해 로딩 애니메이션,
                문장을 일관되게 작성하여 UX 라이팅을 적절하게 작성하는 등의
                노력을 합니다.
              </li>
              <li className="text-base text-gray-300">
                마이그레이션 작업을 하는 과정에서 타입스크립트에 관련된 ESLint
                설정이 추가로 필요하다는 것을 알게 되었습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default skill;
